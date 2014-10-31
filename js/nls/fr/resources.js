﻿define(
     ({
        map: {
            error: "Impossible de créer la carte"
        },
        onlineStatus: {
            offline: "Vous travaillez actuellement en mode hors connexion. Les envois de formulaires seront enregistrés localement jusqu\'à l\'établissement d\'une connexion au serveur.",
            reconnecting: "Reconnexion&hellip;",
            pending: "${total} modifications en attente seront envoyées lorsqu\'une connexion réseau sera rétablie."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "Mon organisation",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Mon contenu",
                    favoritesLabel: "Mes favoris"
                },
                title: "Sélectionner une carte Web",
                searchTitle: "Rechercher",
                ok: "OK",
                cancel: "Annuler",
                placeholder: "Saisir un terme de recherche"
            },
            groupdlg: {
                items: {
                    organizationLabel: "Mon organisation",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Mon contenu",
                    favoritesLabel: "Mes favoris"
                },
                title: "Sélectionner un groupe",
                searchTitle: "Rechercher",
                ok: "OK",
                cancel: "Annuler",
                placeholder: "Saisir un terme de recherche"
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "Ordonnée",
            utm_easting: "Abscisse",
            utm_zone_number: "Numéro de fuseau",
            geoFormGeneralTabText: "1. Entrez des informations",
            locationInformationText: "2. Sélectionnez un emplacement",
            submitInformationText: "3. Remplissez le formulaire",
            submitInstructions: "Ajoutez ces informations à la carte.",
            myLocationText: "Emplacement actuel",
            locationDescription: "Sélectionnez un emplacement pour cette entrée en cliquant/touchant la carte, ou à l\'aide d\'une des options suivantes.",
            addressText: "Rechercher",
            geographic: "Lat/Lon",
            locationTabText: "Emplacement",
            locationPopupTitle: "Emplacement",
            submitButtonText: "Envoyer une entrée",
            submitButtonTextLoading: "Envoi&hellip;",
            formValidationMessageAlertText: "Les champs suivants sont requis :",
            selectLocation: "Sélectionnez un ${openLink}emplacement${closeLink} pour votre envoi.",
            emptylatitudeAlertMessage: "Entrez une coordonnée de ${openLink}latitude${closeLink}.",
            emptylongitudeAlertMessage: "Entrez une coordonnée de ${openLink}longitude${closeLink}.",
            shareUserTitleMessage: "Merci de votre contribution !",
            entrySubmitted: "Votre entrée a été envoyée à la carte.",
            shareThisForm: "Partager ce formulaire",
            shareUserTextMessage: "Demandez aux autres utilisateurs d\'apporter leur contribution en utilisant les options suivantes.",
            addAttachmentFailedMessage: "Impossible d\'ajouter une pièce jointe à la couche",
            addFeatureFailedMessage: "Impossible d\'ajouter une entité à la couche",
            noLayerConfiguredMessage: "Une erreur est survenue lors du chargement ou de la recherche d\'une couche d\'entités modifiable. Pour afficher le formulaire et commencer à collecter les envois, ajoutez une couche d\'entités modifiable à la carte Web.",
            placeholderLatitude: "Latitude (Y)",
            placeholderLongitude: "Longitude (X)",
            latitude: "Latitude",
            longitude: "Longitude",
            findMyLocation: "Localiser mon emplacement",
            finding: "Localisation&hellip;",
            backToTop: "Retour en haut",
            addressSearchText: "Votre envoi apparaîtra ici. Vous pouvez faire glisser l\'épingle pour corriger l\'emplacement.",
            shareModalFormText: "Lien du formulaire",
            close: "Fermer",
            locationNotFound: "L\'emplacement est introuvable.",
            setLocation: "Définir l\'emplacement",
            find: "Rechercher une adresse ou un lieu",
            attachment: "Pièce jointe",
            toggleDropdown: "Activer/Désactiver le menu déroulant",
            invalidLatLong: "Entrez des coordonnées de ${latLink}latitude${closeLink} et de ${lngLink}longitude${closeLink} valides.",
            invalidUTM: "Entrez des coordonnées ${openLink}UTM${closeLink} valides.",
            invalidUSNG: "Entrez des coordonnées ${openLink}USNG${closeLink} valides.",
            invalidMGRS: "Entrez des coordonnées ${openLink}MGRS${closeLink} valides.",
            geoformTitleText: "Formulaire géographique",
            domainDefaultText: "Sélectionner&hellip;",
            applyEditsFailedMessage: "Votre entrée ne peut pas être envoyée. Réessayez.",
            requiredFields: "Des erreurs se sont produites. Corrigez-les ci-dessous.",
            requiredField: "(obligatoire)",
            error: "Erreur",
            textRangeHintMessage: "${openStrong}Astuce :${closeStrong} Valeur minimale ${minValue} et valeur maximale ${maxValue}",
            dateRangeHintMessage: "${openStrong}Astuce :${closeStrong} Date minimum ${minValue} et date maximum ${maxValue}"
        },
        builder: {
            invalidUser: "Vous n\'êtes pas autorisé à consulter cet élément",
            invalidWebmapSelectionAlert: "La carte Web sélectionnée ne contient aucune couche valide à utiliser. Veuillez ajouter une FeatureLayer modifiable dans votre carte Web pour poursuivre.",
            invalidWebmapSelectionAlert2: "Pour obtenir plus d\'informations, consultez la rubrique ${openLink}Qu\'est-ce qu\'un service d\'entités ?${closeLink}",
            selectFieldsText: "Sélectionner les champs du formulaire",
            selectThemeText: "Sélectionner le thème du formulaire",
            webmapText: "Carte Web",
            layerText: "Couche",
            detailsText: "Détails",
            fieldsText: "Champs",
            styleText: "Style",
            optionText: "Options",
            previewText: "Aperçu",
            publishText: "Publier",
            optionsApplicationText: "Options",
            titleText: "Générateur",
            descriptionText: "Le formulaire géographique est un modèle configurable permettant la mise à jour des données d\'un ${link1}service d\'entités${closeLink}. Cette application permet aux utilisateurs de saisir des données dans un formulaire plutôt que dans la fenêtre contextuelle d\'une carte, tout en exploitant la puissance de la ${link2}carte Web${closeLink} et des services d\'entités modifiables. Procédez comme suit pour personnaliser et déployer votre formulaire géographique.",
            btnPreviousText: "Précédent",
            btnNextText: "Suivant",
            webmapTabTitleText: "Sélectionner une carte Web",
            viewWebmap: "Afficher la carte Web",
            btnSelectWebmapText: "Choisir une carte Web",
            btnSelectWebmapTextLoading: "Chargement&hellip;",
            layerTabTitleText: "Sélectionner une couche modifiable",
            selectLayerLabelText: "Couche",
            selectLayerDefaultOptionText: "Sélectionner une couche",
            detailsTabTitleText: "Détails du formulaire",
            detailTitleLabelText: "Titre",
            detailLogoLabelText: "Image du logo",
            descriptionLabelText: "Texte d\'aide (facultatif)",
            fieldTabFieldHeaderText: "Champ",
            fieldTabLabelHeaderText: "Etiquette",
            fieldTabDisplayTypeHeaderText: "Afficher comme",
            selectMenuOption: "Menu Sélectionner",
            selectRadioOption: "Case d\'option",
            selectTextOption: "Texte",
            selectCheckboxOption: "Case à cocher",
            selectMailOption: "Adresse électronique",
            selectUrlOption: "URL",
            selectTextAreaOption: "Zone de texte",
            previewApplicationText: "Aperçu de l\'application",
            saveApplicationText: "Enregistrer l\'application",
            saveText: "Enregistrer",
            toggleNavigationText: "Activer/Désactiver la navigation",
            formPlaceholderText: "Mon formulaire",
            shareBuilderInProgressTitleMessage: "Publication du formulaire géographique",
            shareBuilderProgressBarMessage: "Veuillez patienter&hellip;",
            shareBuilderTitleMessage: "Elément enregistré",
            shareBuilderTextMessage: "Vous pouvez commencer à collecter des informations en partageant avec d\'autres",
            shareModalFormText: "Lien du formulaire",
            shareBuilderSuccess: "Votre formulaire géographique a été mis à jour et publié !",
            geoformTitleText: "Formulaire géographique",
            layerTabText: "Il s\'agit de la couche dont sera issu le formulaire géographique. La couche doit être un service d\'entités autorisé à effectuer des mises à jour avec des autorisations de partage appropriées à votre public.",
            detailsTabText: "Utilisez les zones Détails du formulaire ci-dessous pour adapter le titre, ajouter un logo personnalisé et fournir une brève description pour le public de votre formulaire géographique. Dans la description, vous pouvez ajouter des liens vers d\'autres ressources, des coordonnées et même diriger votre public vers une application cartographique Web qui présente toutes les données collectées avec le formulaire géographique.",
            fieldsTabText: "Vous pouvez ici sélectionner les champs qui seront visibles au public de votre formulaire géographique, modifier les étiquettes qu\'il verra et ajouter une brève description pour faciliter la saisie de données.",
            styleTabText: "Stylisez votre formulaire géographique à l\'aide des thèmes ci-dessous en fonction de vos préférences.",
            publishTabText: "Si vous avez terminé la personnalisation de votre formulaire géographique, enregistrez l\'application et commencez à la partager avec votre public. Vous pouvez toujours revenir dans ce générateur et poursuivre la personnalisation en fonction des commentaires que vous recevez.",
            smallHeader: "Utiliser un petit en-tête",
            pushpinText: "Punaise",
            doneButtonText: "Consulter l\'élément d\'application",
            fieldTabPlaceHolderHeaderText: "Astuce (facultatif)",
            attachmentLabelText: "Etiquette de pièce jointe",
            attachmentLabelHint: "Indiquez aux utilisateurs le type de fichier à joindre.",
            attachmentDescription: "Description de la pièce jointe",
            attachmentHint: "Si cela est nécessaire, vous pouvez indiquer des informations supplémentaires sur les pièces jointes à cet endroit.",
            jumbotronDescription: "Le composant Bootstrap Jumbotron permet de définir facilement la fonction prévue de votre application. Vous pouvez désactiver cette fonction à tout moment.",
            shareGeoformText: "Partager le formulaire géographique",
            shareDescription: "Le volet de partage permet à votre public de partager facilement le formulaire géographique avec d\'autres collaborateurs une fois leur envoi effectué. Vous pouvez désactiver cette fonction à tout moment.",
            defaultMapExtent: "Etendue de la carte par défaut",
            defaultMapExtentDescription: "La carte est réinitialisée sur l\'étendue par défaut de votre carte Web après l\'envoi. Vous pouvez désactiver cette fonction à tout moment.",
            pushpinOptionsDescription: "Attribuez la couleur de votre choix à la punaise de la carte. Elle doit être différente de la symbologie de la carte afin d\'aider l\'utilisateur à placer son envoi sur la carte",
            selectLocationText: "Sélectionner l\'emplacement par",
            myLocationText: "Mon site",
            searchText: "Rechercher",
            coordinatesText: "Coordonnées de latitude et longitude",
            usng: "Coordonnées USNG",
            mgrs: "Coordonnées MGRS",
            utm: "Coordonnées UTM",
            selectLocationSDescription: "Autorisez les utilisateurs à sélectionner un emplacement à l\'aide de ces méthodes."
        }
    })
);