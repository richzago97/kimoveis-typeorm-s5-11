import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { Propertie } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";

const categoriesListProperties = async (id: string): Promise<Propertie[]> => {
  const categoryRepository = AppDataSource.getRepository(Category);
  try {
    const category = await categoryRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        properties: true,
      },
    });
    console.log(category);

    if (!category) {
      throw new AppError("Category not found");
    }

    return category.properties!;
  } catch (error) {
    throw new AppError("ID Invalid", 404);
  }
};
export default categoriesListProperties;
