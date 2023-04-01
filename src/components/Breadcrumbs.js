import tw from "tailwind-styled-components"

import { useMatches } from "react-router-dom";

const StyleFooter = tw.span`
    bg-mainBeige
    w-full
    h-52
    mt-8
`

const Breadcrumbs = () => {

        let matches = useMatches();
        let crumbs = matches.filter((match) => Boolean(match.handle?.crumb)).map((match) => match.handle.crumb(match.data));
      
        return (
          <ol>
            {crumbs.map((crumb, index) => (
              <li key={index}>{crumb}</li>
            ))}
          </ol>
        );
      
  };
 
export default Breadcrumbs;