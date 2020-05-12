import Axios from 'axios';

export default {
  fetchTutorial: function (tutorialId) {
    return Axios.get(`/api/tutorials/${tutorialId}`);
  },
  fetchSteps: function (tutorialId) {
    return Axios.get(`/api/tutorials/${tutorialId}/steps`);
  },
  deleteStep: function (stepId) {
    return Axios.delete(`/api/steps/${stepId}`);
  },
  fetchTutorials: function () {
    return Axios.get('/api/tutorials/');
  },
  deleteTutorial: function (tutorialId) {
    return Axios.delete(`/api/tutorials/${tutorialId}`);
  },
  createStep: function (tutorialID, newStep) {
    return Axios.post(`/api/tutorials/${tutorialID}/steps/create`, newStep);
  },
  createTutorial: function (newTutorial) {
    return Axios.post('/api/tutorials/create', newTutorial);
  }
}