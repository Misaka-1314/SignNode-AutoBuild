FROM python:3.12-alpine

RUN apk add tzdata && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo Asia/Shanghai > /etc/timezone

RUN apk add ca-certificates

RUN apk add --update --no-cache python3 py3-pip \
    && rm -rf /var/cache/apk/*

VOLUME /data

WORKDIR /data

COPY ./requirements.txt /app/requirements.txt

RUN pip install --upgrade pip --break-system-packages \
    && pip install --user -r /app/requirements.txt --break-system-packages

COPY . /app

CMD ["sh", "-c", "python3 /app/main.py"]