# Lest Trembles

## Site Web Responsive d'une Association de Danse 
## Serveur API Restful & Client en React
 
### 1. Présentation du projet
Ce site web comprend 2 parties :
#### 1.1. Espace accessible à tous pour faire la promotion de l'association de danse. 
Cet espace comprend les rubriques suivantes : les profs, les cours, les tarifs, les spectacles et l'association.
#### 1.2. Espace dédié aux adhérents
Permettre aux adhérents d'avoir accès à leurs informations personnelles et relatives aux cours suivis par les membres de la famille.
Il est possible de mofifier ses informations (adresse, email, téléphone...), prévenir les professeurs en cas d'absence et recevoir par mail une facture.


### 2. Sécurité et Authentification
A chaque modification de mot de passe, la confirmation du mot de passe est nécessaire.

#### 2.1.Possibilité de modifier le mot de passe si souhaité
#### 2.2. Procédure de ré-initialisation du mot de passe en cas d'oubli
L'adhérent doit dans un premier temps renseigner son email et s'il est connu de la base, il recevra par email un lien sécurisé (avec token) valide 1H pour ré-initialiser son mot de passe.

### 3. Services proposés
#### 3.1. Accès à ses informations personnelles et modification possible
#### 3.2. Accès aux informations relatives aux cours suivis par les adhérents
#### 3.3. Gestion des absences
Envoi d'un email au professeur concerné.
#### 3.4. Gestion des factures
Envoi de la facture par email à l'adhérent.

### 3. Challenges Techniques
#### Gestion des emails avec Nodemailer
#### Réinitialisation du mot de passe avec lien cliquable et valide 1H
#### Responsive CSS
#### Animations : modal, carrousel, menu hamburger, counter

![alt text](/public/images/ecrans.jpg)
