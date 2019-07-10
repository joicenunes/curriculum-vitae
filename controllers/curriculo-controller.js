
const CurriculoModel = require('../models/curriculo-model');

exports.getData = () => {
  return CurriculoModel;
}

exports.getName = () => {
  return CurriculoModel.name;
}

exports.getPersonalData = () => {
  return CurriculoModel.personal;
}

exports.getTitle = () => {
  return CurriculoModel.title;
}

exports.getProfession = () => {
  return CurriculoModel.profession;
}

exports.getDescription = () => {
  return CurriculoModel.description;
}

exports.getExperience = () => {
  return CurriculoModel.experience;
}

exports.getEducation = () => {
  return CurriculoModel.education;
}

exports.getSkills = () => {
  return CurriculoModel.skills;
}

exports.getSkills = () => {
  return CurriculoModel.interests;
}
