FROM python:3.12-alpine

RUN apk add --update --no-cache python3 py3-pip tzdata ca-certificates \
    && rm -rf /var/cache/apk/* \
    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo Asia/Shanghai > /etc/timezone

ENV IS_DOCKER=1

VOLUME /data

WORKDIR /data

COPY ./requirements.txt /app/requirements.txt

RUN pip config set global.trusted-host mirrors.cloud.tencent.com \
    && pip install --upgrade pip --break-system-packages \
    && pip install --user -r /app/requirements.txt --break-system-packages

COPY . /app

CMD ["sh", "-c", "python3 /app/main.py"]