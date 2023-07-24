FROM node:15.12.0

COPY . /app
WORKDIR /app
RUN npm install
RUN npm uninstall sass-loader
RUN npm install sass-loader --save-dev
RUN npm rebuild node-sass

CMD ["npm", "start"]
