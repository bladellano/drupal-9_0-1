# 💻 Introduction learning Drupal...

### Incomplete documentation

Este eh um documentacao para o aprendizado em drupal que estara sempre em atualizacao.

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

## Basics commands

```bash
drush cex 
drush sql-dump > ./database/dump_$(date +'%F_%H%M%S').sql

drush cr
drush sqlc < database/dump_2023-10-08_192505.sql

```

## Steps for import e restore project Drupal

```bash
'drush sqlc < database/{last_dump}}.sql'
Copy path 'files' for new clone project.
'drush cr' next step.

```
## Tip: most used modules

```bash
* Display Suite (https://www.drupal.org/project/ds)
* Blockify (Drupal 7)
* Twig Debugger (https://www.drupal.org/project/twig_debugger)
* Easy Breadcrumb (https://www.drupal.org/project/easy_breadcrumb)
* Block Visibility Groups
* Admin toolbar (Observatorio);
* Tara (Theme) * Good for beginners learning themes;
* Devel / Devel Generate;
* Pathauto (Observatorio);
* Paragraphs (Observatorio);
* Stage file proxy (Observatorio);
* Configuration Partial Export (Observatorio);
* Manage Layout (PECE);
* Charts Drupal (Observatorio);
* View Json Source (Observatorio);
* Feedback Website (Observatorio);
* Drupal Console (PECE);
* Web profiler (Very utility);
* Devel Php;
```
