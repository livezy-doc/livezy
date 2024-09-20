import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'HomeEzy',
    Svg: require('@site/static/img/home_page/home.svg').default,
    description: (
      <>
        From choosing the right house to getting your loan approved hassle-free, from scheduling a site visit to finalizing the deal at your price, we accompany you in your journey at every single step
      </>
    ),
  },
  {
    title: 'ShopEzy',
    Svg: require('@site/static/img/home_page/shop.svg').default,
    description: (
      <>
        Indulge in a virtual shopping spree like never before! Enjoy enticing discounts and special offers across a plethora of online retail partners. Elevate your shopping experience with exclusive deals tailored just for you
 directory.
      </>
    ),
  },
  {
    title: 'TravelEzy',
    Svg: require('@site/static/img/home_page/travel.svg').default,
    description: (
      <>
        Embark on unforgettable journeys with our exclusive travel and hotel booking rewards. Whether it's a business trip or a leisure getaway, enjoy the perks of discounted fares and exceptional accommodations to make your travel experiences seamless and delightful

      </>
    ),
  },
  
  
   {
    title: 'CreditEzy',
    Svg: require('@site/static/img/home_page/credit.svg').default,
    description: (
      <>
       Elevate your financial strategies with LivEzy, a trusted partner for leading banks. Specializing in loans, cards, investments, and insurance services
      </>
    ),
  },
  
  
  
   {
    title: 'ServiceEzy',
    Svg: require('@site/static/img/home_page/service.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory
      </>
    ),
  },
  
  
   {
    title: 'MartEzy',
    Svg: require('@site/static/img/home_page/mart.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory
      </>
    ),
  },
  
   {
    title: 'AutoEzy',
    Svg: require('@site/static/img/home_page/auto.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory
      </>
    ),
  },
  
  
   {
    title: 'HealthEzy',
    Svg: require('@site/static/img/home_page/health.svg').default,
    description: (
      <>
        Elevate your physical, mental, and emotional health all in one place for a holistic wellness experience like never before

      </>
    ),
  },
  
  
];








function Feature({Svg, title, description}) {
  return (
  
  
	  
	  
  
  
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
	
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
