import React from 'react';
import { connect } from 'react-redux';
import { searchVideos, resetSearchVideos } from '../actions';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import Categories from './Categories';
import '../assets/styles/components/Search.scss';
// import classNames from 'classnames';

const Search = ({ isHome, searchVideos, resetSearchVideos, search }) => {
  // const inputStyle = classNames('input', {
  //   isHome,
  // });

  const Styles = {
    homeInput: {
      width: '70%',
    },
  };

  const handleSearch = (event) => {
    event.target.value === '' ?
      resetSearchVideos() :
      searchVideos(event.target.value);
  };

  return (
    <>
      <section className='main'>
        <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
        <input
          type='text'
          className='input'
          style={isHome && Styles.homeInput}
          placeholder='Buscar...'
          onChange={handleSearch}
        />
      </section>
      {
        search && (
          <Categories title='Resultados de la busqueda'>
            { search.length > 0 ? (
              <Carousel>
                {search.map(item => <CarouselItem key={item.id} {...item} />)}
              </Carousel>
            ) :
              <h2 className='main__search--not-found'>No se encontró ningún resultado</h2>
            }
          </Categories>
        )
      }
    </>
  );
};

const mapDispatchToProps = {
  searchVideos,
  resetSearchVideos,
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

