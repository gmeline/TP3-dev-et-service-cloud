# TP3-dev-et-service-cloud

## Objectifs
- Déposer une image dans un bucket
- Traitement automatique de l'image dans un autre bucket
- Consultation de l'image par URL

## Architecture
### Servicee utilisés
- Cloud storage : pour le dépot et la publication des images

## Buckets
- 'tp3-depot-godefroy_meline' : bucket pour le dépot des images
- 'tp3-public-godefroy_meline' : accéssibilité des images

## Fonctionnalité
### enregistrement des images
- dépot d'une image sur le bucket 'tp3-depot-godefroy_meline'
- cope de l'image sur le bucket 'tp3-public-godefroy_meline'

### Consultation des images
- image disponible sur le lien : https://europe-west1-tp-dev-service-cloud.cloudfunctions.net/consultation

## Déploiement
- commande utilisé pour l'enregistrement :
  gcloud functions deploy enregistrement \
    --runtime nodejs18 \
    --trigger-resource tp3-depot-godefroy_meline \
    --trigger-event google.storage.object.finalize \
    --entry-point enregistrement \
    --region europe-west1
- commande utilisé pour la consultation :
  gcloud functions deploy consultation \
  --runtime nodejs18 \
  --trigger-http \
  --allow-unauthenticated \
  --entry-point consultation \
  --region=europe-west1
