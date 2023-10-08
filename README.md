# Introduction learnin Drupal...

## Incomplete documentation

```python   

# Make path
mkdir sites/default -> /files/translations

# To assign 
sudo chmod 777 -R sites/default -> /files

cp sites/default/default.settings.php sites/default/settings.php

sudo chmod 777 sites/default/settings.php

# Before 

sudo chmod 775 sites/default/settings.php

```

Comands basics

```bash
./vendor/bin/drush cex 
./vendor/bin/drush sql-dump > ./database/dump_$(date +'%F_%H%M%S').sql

./vendor/bin/drush cr

```