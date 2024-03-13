import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
  const [starships, setStarships] = useState(null);
  const [currentStarship, setCurrentStarship] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  //fetch data from api
  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/rockets');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setStarships(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <StarshipContext.Provider
      value={{ starships, currentStarship, setCurrentStarship, isLoading }}
    >
      {children}
    </StarshipContext.Provider>
  );
};

StarshipProvider.propTypes = {
  children: PropTypes.node,
};

export const useStarshipContext = () => {
  return useContext(StarshipContext);
};
