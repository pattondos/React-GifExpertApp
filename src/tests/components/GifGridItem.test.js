import { shallow } from 'enzyme';
import React from 'react';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en el <GifGridItem />', () => {
    const url = 'https://localhost/algo.jpg';
    const title = 'Titulo'
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar correctamente el title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);

    });

    test('Debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe tener animate__bounce', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__bounce')).toBe(true);
    })


});
