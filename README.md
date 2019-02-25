# aws-lambda-website-availability-checker


O código deste repositório é uma cao para ser executada no AWS Lambda que busca o conteúdo
de um website, caso a requisicao retorne o status http 200 ou 304, envia uma métrica para o 
CloudWatch com o valor 100, caso retorne qualquer outro status http, envia uma mética com 
o valor 0.

Com essas métricas voce pode configurar um alarme para verificar se há algum valor 0, se 
tiver, envia um email notificando que seu site está fora do ar.


-----------------------------------------



The code on this repository is a AWS Lambda function that fetchs the content of a website
and if it returns 200 or 304 http status, it sends a metric to CloudWatch with value 100. 
If it returns any other http status, it sends 0 to CloudWatch.

With these metrics you can configure an alarm to verify if there is any 0 values, if so, 
send an email notifying your website is down.


