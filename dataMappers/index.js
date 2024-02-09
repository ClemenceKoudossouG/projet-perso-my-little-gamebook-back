// Index des dataMappers pour les centraliser et renvoyer les appels des fonctions vers le dataMapper en question souhaité

// On importe tous les dataMappers existants dans chaque fichier qui porte son nom
import { storyDataMapper } from "./story";
import { genreDataMapper } from "./genre";
import { compartmentDataMapper } from "./compartment";
import { worldDataMapper } from "./world";
import { placeDataMapper } from "./place";
import { npcDataMapper } from "./npc";
import { itemDataMapper } from "./item";
import { actionDataMapper } from "./action";
import { userDataMapper } from "./user";

// et on les exporte pour qu'ils soient utilisables
export default {
    storyDataMapper,
    genreDataMapper,
    compartmentDataMapper,
    worldDataMapper,
    placeDataMapper,
    npcDataMapper,
    itemDataMapper,
    actionDataMapper,
    userDataMapper
}