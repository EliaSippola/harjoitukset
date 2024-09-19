# Installing Mongodb on aws ec2 instance

This guide will tell you how to install MongoDB server to aws ec2 instance running `Amazon linux 2023` using ssh and yum, how to enable acces from other servers to the mongodb server, and how to connect to the server using Studio3T

source: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-amazon/

## Installing and running mongodb

1. Create instance with `Amazon Linux` (or use existing one) and connect to it using ssh

2. Conigure yum to install mongodb directly

use command `sudo nano /etc/yum.repos.d/mongodb-org-7.0.repo`

add the following to the file:
```re
[mongodb-org-7.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2023/mongodb-org/7.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://pgp.mongodb.com/server-7.0.asc
```

save the file after adding the lines

3. Install latest stable version of mongodb

use command `sudo yum install -y mongodb-org`

check source on how to install specific versions

4. make sure user `mongod` has access to the files

`/var/lib/mongo`
and
`/var/log/mongodb`


you can use commands:

```linux
sudo chown mongod: /var/lib/mongo
sudo chown mongod: /var/log/mongodb
```

you might also need to use

```linux
sudo chmod -R 744 /var/lib/mongo
sudo chmod -R 744 /var/log/mongodb
```

5. Start mongodb using systemctl

run command `sudo systemctl start mongod`

this will start the service

you might need to reload services using `sudo systemctl daemon-reload` before starting the service

you can check if the service is running using `sudo systemctl status mongod`

you can enable mongodb to start automatically after restart using `sudo systemctl enable mongod`

6. Access mongodb

you can access mongodb using command `mongosh`

if you can't use command `mongosh` because of openSSL issue, you need to run commands:

```
sudo yum remove mongodb-mongosh
sudo yum install mongodb-mongosh-shared-openssl3
sudo yum install -y mongodb-org
```

reload service with `systemctl` (check step 5)

You should now be able to use command `mongosh`

Check https://www.mongodb.com/docs/mongodb-shell/reference/methods/ for possible methods in mongodb

## Enabling mognodb connections from other ips

Currently MongoDB is only accepting connections inside your own server (`127.0.0.1`)

### Create user that you use to connect to mongodb

1. use command `mongosh` to connect to mongodb
2. switch to database admin with command `use admin;`
3. create new user with command:

```
db.createUser({
    user: "username",
    pwd: "password",
    roles: [ "readWrite", "dbAdmin" ]
});
```

check https://www.mongodb.com/docs/manual/reference/method/db.createUser/#mongodb-method-db.createUser to check how to create users more securely, and how to set permissions correctly. (there is examples on the bottom)

### Allow connections from other ips

1. Exit mongodb using `quit();`
2. edit file `/etc/mongod.conf`

use command `sudo nano /etc/mongod.conf`

3. Find value `bindIp` in section `newtork interfaces`

```
...
# network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1
...
```

4. set value of `bindIp` to `0.0.0.0`

You can also set the value to only your target computer's ip, or add multiple using commas (`,`)

Save file and exit nano.

5. restart mongodb service

use command `sudo systemctl restart mongod`

## Connecting to mongodb using Studio3T

1. Open Studio3T on your and click new connection

2. connect to mongodb using your connection

the connection string should look like this:

`mongodb://<username>:<password>@<ip-or-dns-address>:27017/admin?retryWrites=true`

3. Save the connection, and connect using it

You should now be connected to the mongodb server