import Opinion from '../models/opinion.model.js';
import { analyzeSentiment } from './sentimiento.service.js';

export const createOpinion = async (data) => {
  try {
    // Analizar el sentimiento del contenido de la opinión
    const sentimentData = await analyzeSentiment(data.contenido);

    // Verificar si la respuesta contiene un error
    if (sentimentData.error) {
      throw new Error(sentimentData.error);
    }

    // Añadir los datos de sentimiento a la opinión
    const opinionData = {
      ...data,
      calificacion: Math.round(sentimentData.sentiment.polarity * 5), // Asignar la calificación basada en la polaridad del análisis de sentimientos
      sentiment_scores: JSON.stringify(sentimentData.sentiment) // Guardar los puntajes de sentimiento
    };

    return await Opinion.create(opinionData);
  } catch (error) {
    console.error('Error creating opinion:', error);
    throw error;
  }
};

export const findAllOpinions = async () => {
  return await Opinion.findAll();
};

export const findOpinionById = async (id) => {
  return await Opinion.findByPk(id);
};

export const updateOpinion = async (id, data) => {
  return await Opinion.update(data, { where: { id_opinion: id } });
};

export const deleteOpinion = async (id) => {
  return await Opinion.destroy({ where: { id_opinion: id } });
};
