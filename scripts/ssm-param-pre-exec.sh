#!/bin/bash

# region の設定
export AWS_DEFAULT_REGION=$(/usr/bin/curl 169.254.169.254/latest/meta-data/placement/region 2>/dev/null)

# パラメータの取得
DB_HOST=$(/usr/bin/aws ssm get-parameters --name DB_HOST --query "Parameters[0].Value" --output text --region "$AWS_DEFAULT_REGION")
DB_PORT=$(/usr/bin/aws ssm get-parameters --name DB_PORT --query "Parameters[0].Value" --output text --region "$AWS_DEFAULT_REGION")
DB_NAME=$(/usr/bin/aws ssm get-parameters --name DB_NAME --query "Parameters[0].Value" --output text --region "$AWS_DEFAULT_REGION")
DB_USERNAME=$(/usr/bin/aws ssm get-parameters --name DB_USERNAME --query "Parameters[0].Value" --output text --region "$AWS_DEFAULT_REGION")
DB_PASSWORD=$(/usr/bin/aws ssm get-parameters --name DB_PASSWORD --query "Parameters[0].Value" --output text --region "$AWS_DEFAULT_REGION" --with-decryption)
S3_BUCKET_NAME_ORIGINAL=$(/usr/bin/aws ssm get-parameters --name S3_BUCKET_NAME_ORIGINAL --query "Parameters[0].Value" --output text --region "$AWS_DEFAULT_REGION")
S3_BUCKET_NAME_THUMBNAIL=$(/usr/bin/aws ssm get-parameters --name S3_BUCKET_NAME_THUMBNAIL --query "Parameters[0].Value" --output text --region "$AWS_DEFAULT_REGION")
SESSION_TABLE_NAME=$(/usr/bin/aws ssm get-parameters --name SESSION_TABLE_NAME --query "Parameters[0].Value" --output text --region "$AWS_DEFAULT_REGION")
SESSION_KEY_NAME=$(/usr/bin/aws ssm get-parameters --name SESSION_KEY_NAME --query "Parameters[0].Value" --output text --region "$AWS_DEFAULT_REGION")

# パラメータを systemd に設定
sudo systemctl set-environment DB_HOST=${DB_HOST}
sudo systemctl set-environment DB_PORT=${DB_PORT}
sudo systemctl set-environment DB_NAME=${DB_NAME}
sudo systemctl set-environment DB_USERNAME=${DB_USERNAME}
sudo systemctl set-environment DB_PASSWORD=${DB_PASSWORD}
sudo systemctl set-environment S3_BUCKET_NAME_ORIGINAL=${S3_BUCKET_NAME_ORIGINAL}
sudo systemctl set-environment S3_BUCKET_NAME_THUMBNAIL=${S3_BUCKET_NAME_THUMBNAIL}
sudo systemctl set-environment SESSION_TABLE_NAME=${SESSION_TABLE_NAME}
sudo systemctl set-environment SESSION_KEY_NAME=${SESSION_KEY_NAME}
