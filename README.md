# Introduction learning Drupal...

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

Comandos básicos

```bash
drush cex 
drush sql-dump > ./database/dump_$(date +'%F_%H%M%S').sql

drush cr
drush sqlc < database/dump_2023-10-08_192505.sql

```

Passos importar e restaurar um projeto Drupal

```bash
'drush sqlc < database/{last_dump}}.sql'
Copiar a pasta 'files' para o novo clone.
'drush cr' em seguida

```