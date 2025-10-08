FROM python:3.12-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends tzdata \
    && rm -rf /var/lib/apt/lists/* \
    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo Asia/Shanghai > /etc/timezone

ENV IS_DOCKER=1

COPY ./requirements.txt /app/requirements.txt

RUN pip install --upgrade pip --break-system-packages \
    && pip install -r /app/requirements.txt --break-system-packages

CMD ["sh", "-c", "python3 main.py"]
