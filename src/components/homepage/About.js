import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, Text, SimpleGrid, Container, Group, Title } from '@mantine/core';
import { Code, Cloud, BuildingCommunity } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: 'absolute',
    height: 100,
    width: 160,
    top: 0,
    left: 0,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  abouttext: {
    [theme.fn.smallerThan('sm')]: {
      padding: 10,
    },
  }
}));

const mockdata = [
  {
    icon: Code,
    title: 'App Developers',
    description:
      'Deploy and maintain apps in an open operations environment. Open yourself up to input on how to make your app operate better.',
  },
  {
    icon: Cloud,
    title: 'SRE and DevOps',
    description:
      'Site reliability engineering is the evolution of DevOps for operating managed services. Join a movement to apply SRE best practices in an open operations environment, and help app developers build operations considerations back into their code.',
  },
  {
    icon: BuildingCommunity,
    title: 'Community',
    description:
      'Participate in the Operate First community. Contribute to the success of our open operations mission.',
  },
];

Feature.propTypes = {
  icon: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.object,
}

function Feature({ icon: Icon, title, description, className, ...others }) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={38} className={classes.icon} />
        <Text weight={700} size="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text color="dimmed" size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}


export function AboutFeatures() {
  const {classes} = useStyles();
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg" py="lg">
      <Title order={1} align="center" sx={(theme) => ({color: theme.colors.blue[7]})}>
        Why Operate First?
      </Title>
      <Text my="xl" size="lg" px={100} className={classes.abouttext}align="center">
          Open source software is widely available, but it faces an operations barrier to entry into production environments. Proprietary services for operations undermine the open source model. To overcome this barrier, we must shift to an open source approach to operations.
          This means developers and operators collaborate to apply a product&apos;s operational considerations right back into the code itself. This means developers and operators collaborating to apply a product&apos;s operational considerations right back into the code itself.
      </Text>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50} py="md">
        {items}
      </SimpleGrid>
    </Container>
  );
}
