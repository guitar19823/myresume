import React, { useReducer } from 'react';
import { PageContext } from './pageContext';
import { PageReducer } from './PageReducer';
import { SET_REDIRECT } from '../types';

export const PageState = ({ children }) => {
  const initialState = {
    redirect: {
      currentClose: false,
      path: null
    },
    user: {
      name: 'Alexey',
      surname: 'Yarikov',
      status: 'javascript programmer',
      source: 'https://github.com/guitar19823',
      avatar: '',
      data: {
        profile: {
          text1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean quis porttitor libero. Sed at dignissim ex.
          Proin malesuada lorem et finibus vulputate.`,
          text2: `Etiam nibh est, faucibus quis rhoncus sed, tempor a quam.
          Curabitur sagittis nunc nec risus rhoncus,
          sed facilisis leo elementum.`
        },
        contacts: {
          address: 'Cheboksary, Novogorodskaya 24',
          phone: '+7 999 195-15-96',
          email: 'orion_ins@mail.ru',
          telegram: '@guitar19823',
          skype: 'yarik19823'
        },
        social: {
          facebook: 'https://facebook.com',
          vk: 'https://vk.com',
        }
      }
    },
    info: {
      experience: {
        title: 'experience',
        data: [
          {
            interval: '2017 - 2018',
            position: 'Maecenas ut placerat augue, quis elementum ante.',
            description: `Integer pretium magna fringilla, rhoncus mi vel, commodo massa.`
          },
          {
            interval: '2018 - 2019',
            position: 'Maecenas ut placerat augue, quis elementum ante.',
            description: `Integer pretium magna fringilla, rhoncus mi vel, commodo massa.
            Integer pretium magna fringilla, rhoncus mi vel, commodo massa.`
          }
        ]
      },
      education: {
        title: 'education',
        data: [
          {
            interval: '2014 - 2016',
            position: 'Maecenas ut placerat augue, quis elementum ante.',
            description: `Integer pretium magna fringilla, rhoncus mi vel, commodo massa.
            Integer pretium magna fringilla, rhoncus mi vel, commodo massa.
            Integer pretium magna fringilla, rhoncus mi vel, commodo massa.`
          },
          {
            interval: '2016 - 2018',
            position: 'Maecenas ut placerat augue, quis elementum ante.',
            description: `Integer pretium magna fringilla, rhoncus mi vel, commodo massa.`
          },
          {
            interval: '2018 - 2019',
            position: 'Maecenas ut placerat augue, quis elementum ante.',
            description: `Integer pretium magna fringilla, rhoncus mi vel, commodo massa.
            Integer pretium magna fringilla, rhoncus mi vel, commodo massa.`
          },
          {
            interval: '2019 - 2020',
            position: 'Maecenas ut placerat augue, quis elementum ante.',
            description: `Integer pretium magna fringilla, rhoncus mi vel, commodo massa.
            Integer pretium magna fringilla, rhoncus mi vel, commodo massa.`
          }
        ]
      },
      skills: {
        title: 'prof skills',
        data: [
          {
            skillName: 'php',
            level: 50
          },
          {
            skillName: 'JavaScript',
            level: 90
          },
          {
            skillName: 'React',
            level: 85
          },
          {
            skillName: 'NodeJS',
            level: 70
          },
          {
            skillName: 'canvas',
            level: 80
          },
          {
            skillName: 'ThreeJS',
            level: 60
          },
          {
            skillName: 'HTML',
            level: 90
          },
          {
            skillName: 'CSS',
            level: 95
          },
          {
            skillName: 'Java',
            level: 20
          },
          {
            skillName: 'Pyton',
            level: 15
          }
        ]
      }
    }
  };

  const [ state, dispatch ] = useReducer(PageReducer, initialState);

  const setRedirect = redirectState => {
    dispatch({
      type: SET_REDIRECT,
      payload: redirectState
    });
  };

  const { redirect, user, info } = state;

  return (
    <PageContext.Provider value={{
      setRedirect, redirect, user, info
    }}>
      { children }
    </PageContext.Provider>
  );
};
  