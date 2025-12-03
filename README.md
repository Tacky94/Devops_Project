Build: "A project buildelését npm install és npm run build parancsokkal lehet elvégezni (bár a build jelen esetben csak egy 'echo' parancsot hajt végre, a függőségek telepítése az npm install)."

Run: "Az appot npm start paranccsal lehet futtatni."

Image Build Parancs: docker build -t hello-devops:v1 .

Futtatási Parancs: docker run -d -p 8080:8080 --name hello-app hello-devops:v1

CI Pipeline: "A CI/CD pipeline a GitHub Actions segítségével fut, ami a main branch-re történő push esetén automatikusan lefut."

Registry: "Az image a Docker Hub-ra kerül feltöltésre: docker.io/tacky94/hello-devops:latest"

Registryből Futtatás: "Az image lehúzható és futtatható: docker pull tacky94/hello-devops:latest és docker run -p 8080:8080 tacky94/hello-devops:latest"