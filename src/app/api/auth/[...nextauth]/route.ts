import { AuthOptions } from "next-auth";
import GitHub from "next-auth/providers/github";
import NextAuth from "next-auth/next";

const authOptions: AuthOptions = {
    providers: [
        GitHub({
            clientId: 'Iv23li7URD54su9CVHMb',
            clientSecret: '89247fd2764c1789edc2cb6278b82075a2997133'
        })
    ],
    callbacks: {
        async session({ session, token }: any) {
            console.log(session, token);
            session.user.name = `${session?.user?.name}_${token?.sub}`;
            return session;
        }
    },
    secret: 'default_secret_key'
};

const nextAuth = NextAuth(authOptions);
/*Ici, on initialise NextAuth avec la configuration définie dans authOptions. Cela crée la route d'API d'authentification de Next.js. */

export { nextAuth as GET, nextAuth as POST };

/*
callbacks :

Les callbacks sont des fonctions que next-auth appelle à différents moments du processus d'authentification. Dans ce cas, un callback session est utilisé pour personnaliser la session utilisateur.
async session({ session, token }: any) :

Déclare une fonction asynchrone appelée session, qui prend comme arguments un objet destructuré contenant session et token.
session : Contient les informations de session de l'utilisateur, comme son nom, son email, etc.
token : Contient des informations supplémentaires sur l'utilisateur, y compris des données issues du JWT généré.
console.log(session, token); :

Affiche les objets session et token dans la console, ce qui peut être utile pour déboguer et voir quelles informations sont disponibles après la connexion de l'utilisateur.
session.user.name = ${session?.user?.name}_${token?.sub}; :

Modifie le nom de l'utilisateur dans la session en ajoutant l'identifiant token.sub au nom original. Le token.sub est souvent l'identifiant unique de l'utilisateur.
L'opérateur ?. est utilisé pour éviter des erreurs si session.user ou session.user.name est undefined.
return session; :

Retourne l'objet session mis à jour, qui est ensuite stocké et accessible dans toute l'application pour les composants utilisant les données de session.
*/