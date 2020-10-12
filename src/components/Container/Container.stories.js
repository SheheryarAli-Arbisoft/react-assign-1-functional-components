import React from 'react';
import { Container } from './Container';

export default {
  title: 'Container',
  component: Container,
};

const Template = args => <Container {...args} />;

const defaultArgs = {
  children: [
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
      similique optio sunt quibusdam sit quis, doloribus facilis nesciunt odit
      totam atque earum magni itaque repellat et quam, molestiae tenetur!
      Aliquid nostrum explicabo vel voluptates, sunt corrupti alias ea
      accusantium asperiores excepturi illum iure quae molestiae cupiditate
      voluptas totam officia, consectetur esse veniam nulla! Beatae cupiditate a
      obcaecati molestiae. Provident sunt possimus earum animi consectetur
      voluptatem tempore quo rerum cum voluptates expedita, dolor sed nihil,
      eius, quis quod eos quaerat? Maxime laboriosam magnam quasi modi
      voluptatem velit laudantium quibusdam quos officiis vitae? Ipsa quos
      sapiente quis iusto dignissimos similique repellat nam itaque provident,
      consequatur ut est labore praesentium optio exercitationem quisquam
      aspernatur veritatis iure dicta atque cupiditate. Recusandae quia quo
      eveniet cumque tempore dicta debitis veritatis mollitia, ullam dolore
      fugit, pariatur, odit ad nam ducimus explicabo corporis dolores!
      Voluptatum, aliquid! Nostrum est minima hic dolor earum ut fugit.
      Consequatur, recusandae. Vel.
    </div>,
  ],
};

export const Normal = Template.bind({});
Normal.args = {
  ...defaultArgs,
};

export const Fluid = Template.bind({});
Fluid.args = {
  ...defaultArgs,
  fluid: true,
};
