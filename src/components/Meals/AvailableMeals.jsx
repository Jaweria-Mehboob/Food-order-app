import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";

import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import LoadingIcon from "./LoadingIcon";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const querySnapshot = await getDocs(collection(db, "meals"));

      const allMeals = [];

      querySnapshot.forEach((doc) => {
        allMeals.push({ id: doc.id, ...doc.data() });
      });

      setMeals(allMeals);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  if (isLoading) return <LoadingIcon />;

  const mealsList = meals.map((meal) => <MealItem {...meal} key={meal.id} />);

  return (
    <section className="pb-8 sm:py-4 md:py-10 lg:py-20">
      <Card className=" animate-slideup">
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
