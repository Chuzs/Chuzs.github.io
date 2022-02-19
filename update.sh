rm /home/chuzs/Github/Chuzs.github.io/checkData/* -r
unzip /storage/internal/*dist.zip -d /home/chuzs/Github/Chuzs.github.io/checkData
git add .
git commit -m "update checkData"
git push
