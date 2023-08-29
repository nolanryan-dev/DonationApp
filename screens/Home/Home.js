import React from 'react';
import {SafeAreaView} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A.'} type={1} />
      <Header title={'Azzahri A.'} type={2} />
      <Header title={'Azzahri A.'} type={3} />
    </SafeAreaView>
  );
};

export default Home;
