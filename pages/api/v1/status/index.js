function status(requeste, response) {
  response.status(200).json({ chave: "São acima da média" });
}

export default status;
