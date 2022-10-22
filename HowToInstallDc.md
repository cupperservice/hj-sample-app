# Docker composeのインストール方法
以下のコマンドで docker-compose をインストールする

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-Linux-x86_64" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
export PATH=/usr/local/bin:$PATH
```
