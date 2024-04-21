import {useRouter} from "next/router";
import Head from "next/head";

export default function Dynamic(){


 const routerObj=useRouter()


	return(
		<>
		
			<Head>
				<title>
					{routerObj.query.dynamic}
					
				</title>	
			

			</Head>
			<div>
				{"Welcome to page " +routerObj.query.dynamic} 
			</div>
		
		</>

		)
}