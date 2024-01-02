# Sistema Cliente/Medico

Aplicação em Angular para realizar a consulta de uma API local com o intuito de listar, criar, deletar e alterar médicos e clientes que foram cadastrados no sistema. Para propósitos de estudo e exemplificação, apenas a pasta "src" do Angular foi encaminhada ao GitHub.

Falando mais sobre a aplicação, com ajuda do framework Angular, conseguimos controlar a visualização do conteúdo em uma única página, sem a necessidade de recarrega-lá. Também é realizado a modularização dos componentes e suas rotas.

É feito uma separação de pastas de componentes, modelos e serviços.

# Componentes:
Aqui temos a parte em que montamos grande parte da página e para isso, separamos em mais pastas delegando a responsabilidade de cada uma. Por exemplo, temos a pasta Cliente com os seguintes componentes: Cliente-Index, Cliente-Create e Cliente-Edit. Assim podemos controlar o fluxo de apresentação, pois invocaremos os componentes de acordo com sua necessidade.

# Modelos: 
Em modelos temos a definição das propriedades da classe, aqui definimos qual o tipo de dado e quais propriedades esperamos receber e enviar para nossa API.

# Service: 

Já no contexto dos serviços, temos a parte que interage diretamente com nossa API. Com ela, podemos reaproveitar suas funcionalidades por meio da injeção de dependência no construtor dos componentes. O serviço tem como intuito centralizar a lógica de comunicação com nossa API.
