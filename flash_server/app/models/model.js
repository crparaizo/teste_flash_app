module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nome_empresa: String,
      nome_fantasia: String,
      cnpj: String,
      endereco: String,
      funcionarios: [{
        nome_funcionario: String,
        sobrenome: String,
        cpf: String,
        email: String
      }],
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Empresa = mongoose.model("registro", schema);
  return Empresa;
};

// module.exports = mongoose => {
//   const Empresa = mongoose.model(
//     "registro",
//     mongoose.Schema(
//       {
//         nome_empresa: String,
//         nome_fantasia: String,
//         cnpj: String,
//         endereco: String,
//         funcionarios: [{
//           nome_funcionario: String,
//           sobrenome: String,
//           cpf: String,
//           email: String
//         }],
//       },
//       { timestamps: true }
//     )
//   );

//   return Empresa;
// };