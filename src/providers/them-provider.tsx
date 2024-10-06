'use client'

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function NextThemeProvider({children}:{children:ReactNode}) {  
    return <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">{children}</ThemeProvider>
}

// Ligne 6 : export default function NextThemeProvider({children}:{children:ReactNode}) {
//     export default function NextThemeProvider({ children }: { children: ReactNode }) { :
//     export default : Cela signifie que cette fonction sera exportée par défaut du fichier, permettant ainsi de l'importer sans utiliser de destructuration.
//     function NextThemeProvider : C'est la déclaration d'une fonction composant appelée NextThemeProvider.
//     ({ children }: { children: ReactNode }) : Ceci est une déstructuration des propriétés (props) du composant. On récupère la prop children et on précise son type { children: ReactNode }. Cela signifie que le composant attend une prop children qui peut être n'importe quel contenu que React peut rendre (comme un autre composant ou un fragment JSX).
//
//    Ligne 7 : return <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">{children}</ThemeProvider>
//     return <ThemeProvider ... >{children}</ThemeProvider> :
//     Le composant NextThemeProvider retourne un ThemeProvider qui englobe tout ce qui est passé en tant que children.
//     <ThemeProvider> est l'élément importé de "next-themes", qui va gérer l'application du thème à l'interface utilisateur.
//     attribute="class" : Cette prop indique que le ThemeProvider utilisera l'attribut class sur l'élément <html> pour déterminer le thème. Typiquement, cela permet d'ajouter une classe comme class="dark" ou class="light" pour faciliter la stylisation via CSS.
//     enableSystem={false} : Cela désactive la fonctionnalité qui synchronise automatiquement le thème avec celui défini par le système d'exploitation de l'utilisateur (ex : s'il est en mode sombre sur son OS, l'application serait normalement également en mode sombre). Ici, on désactive cette synchronisation.
//     defaultTheme="dark" : Cette prop définit le thème par défaut de l'application, qui est "dark" (mode sombre). Si aucun thème n'est spécifié ou si la préférence de l'utilisateur n'est pas connue, l'application commencera en mode sombre.
//     {children} : Les children représentent le contenu qui est passé au composant NextThemeProvider, et sont ici simplement rendus à l'intérieur du ThemeProvider. Cela signifie que tout ce qui est placé à l'intérieur de NextThemeProvider (par exemple, dans un arbre de composants) aura accès aux fonctionnalités de gestion du thème.