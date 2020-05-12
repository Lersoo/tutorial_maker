import API from './API';

export const fetchTutorials = () => {
  API.fetchTutorials()
    .then(response => {
      console.log(response.data)
      this.setState({ tutorials: response.data })
    })
    .catch(function (error) {
      console.log(error);
    })
};

export const deleteTutorial = (tutorialId) => {
  API.deleteTutorial(tutorialId)
    .then(response => {
      console.log(response.data)
      fetchTutorials();
    })
    .catch(function (error) {
      console.log(error);
    })
};