#!/bin/bash
apt-get install sshpass
ip=192.168.11.2
user=user
#ssh-keygen -R $ip
SSHPASS=' ' sshpass -e ssh $user@$ip
