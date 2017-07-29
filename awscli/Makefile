create-instance:
	aws lightsail create-instances \
        --instance-names '${INSTANCE}' \
        --availability-zone 'us-west-2a' \
        --blueprint-id 'ubuntu_16_04_1' \
        --bundle-id 'micro_1_0' \
        --user-data file://'install-docker-ubuntu.sh'

get-instances:
	aws lightsail get-instances

get-active-names:
	aws lightsail get-active-names

delete-instance:
	aws lightsail delete-instance --instance-name ${INSTANCE}
