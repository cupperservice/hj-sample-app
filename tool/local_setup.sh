#!/bin/sh

docker compose up -d

aws --endpoint-url=http://localhost:4566 --profile localstack s3 mb s3://hj-202208-image-original

aws --endpoint-url=http://localhost:4566 --profile localstack s3 mb s3://hj-202208-image-thumbnail

aws --endpoint-url=http://localhost:4566 --profile localstack s3api put-public-access-block --bucket hj-202208-image-original --public-access-block-configuration  "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

aws --endpoint-url=http://localhost:4566 --profile localstack s3api put-public-access-block --bucket hj-202208-image-thumbnail --public-access-block-configuration  "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

aws --endpoint-url=http://localhost:4566 --profile localstack s3api put-bucket-policy --bucket hj-202208-image-original --policy file://services/bucket-policy/original-policy.json

aws --endpoint-url=http://localhost:4566 --profile localstack s3api put-bucket-policy --bucket hj-202208-image-thumbnail --policy file://services/bucket-policy/thumbnail-policy.json

yarn install
