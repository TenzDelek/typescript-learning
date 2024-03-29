# production code
1. first create your tsconfig by pressing tsc --init 
2. then you can go with the node by npm init -y (-y is for saying all yes)
3. create a two directory(file) one for the output(dist) and other the main code(src)
src is where u write your code and dist(distribution) is where the code is for the production
4. outside that create a indexhtml and link your dist index.js to it
5. now to say that src index.ts will compile in dist index.js you have to make changes
in the tsconfig
6. in tsconfig find the outdir mostly on line 50-60 something then make the path to dist/
7. now when u run the terminal on watch by tsc -w , if you have make a index.ts in the 
src it will automatically make changes in the dist

8. you can run it by first npm i lite-server then in packagejson
make "scripts": {
    "start": "lite-server"
  },

9.now in your terminal write npm start and it will run 