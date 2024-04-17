FROM node:20-bookworm as intermediate

RUN apt-get update && apt-get install -y \
	git sed wget unzip make python3 cmake flex bison libglib2.0-dev libgcrypt20-dev libspeex-dev libspeexdsp-dev libc-ares-dev \
	&& rm -rf /var/lib/apt/lists/*

RUN mkdir -p /out /usr/src /var/run
WORKDIR /usr/src

#RUN git clone --depth=1 https://github.com/qxip/webshark.git /usr/src/node-webshark
RUN git clone --depth=1 https://github.com/F3F3exe/webshark_ffmpeg.git /usr/src/node-webshark
RUN git clone --depth=1 https://gitlab.com/wireshark/wireshark.git /usr/src/wireshark

RUN git config --global --add safe.directory /usr/src/wireshark
RUN git config --global --add safe.directory /usr/src/node-webshark

COPY --chown=node . /usr/src/node-webshark

WORKDIR /usr/src/wireshark
RUN ../node-webshark/sharkd/build.sh

WORKDIR /usr/src
RUN mkdir web \
 && cd web \
 && wget github.com/F3F3exe/webshark_ffmpeg/archive/refs/tags/1.zip \
 && unzip 1.zip \
 && rm -rf 1.zip \
 && sed -i 's|href="/"|href="/webshark/"|g' index.html

# && wget github.com/qxip/webshark-ui/releases/latest/download/latest.zip \

FROM node:20-bookworm-slim

RUN apt update \
    && apt install -y git libglib2.0-0 speex libspeex1 libspeexdsp1 libc-ares2 libxml2 \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /captures /usr/local/bin /usr/local/share/wireshark/

COPY --from=intermediate /usr/src/wireshark/build/run/sharkd /usr/local/bin/sharkd
COPY --from=intermediate /usr/src/wireshark/build/run/colorfilters /usr/local/share/wireshark/colorfilters

ENV CAPTURES_PATH=/captures/
ENV SHARKD_SOCKET=/captures/sharkd.sock

COPY --chown=node . /usr/src/node-webshark
COPY --from=intermediate /usr/src/web /usr/src/node-webshark/web

USER node
VOLUME /captures

WORKDIR /usr/src/node-webshark/api
RUN npm install

EXPOSE 8085
ENTRYPOINT [ "/usr/src/node-webshark/entrypoint.sh" ]
