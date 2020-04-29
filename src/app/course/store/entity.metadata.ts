import { DefaultHttpUrlGenerator, EntityMetadataMap } from "@ngrx/data";

export const entityMetadata: EntityMetadataMap = {
  Course: {
    entityName: "Course"
  }
};

export class CustomizeHttpUrls extends DefaultHttpUrlGenerator {
  public getResourceUrls(entityName: string, root: string) {
    const urls = super.getResourceUrls(entityName, root);
    console.log(urls.collectionResourceUrl);
    urls.entityResourceUrl = urls.collectionResourceUrl;
    return urls;
  }
}
