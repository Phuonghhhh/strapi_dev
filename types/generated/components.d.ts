import type { Schema, Struct } from '@strapi/strapi';

export interface CgfCvpListItem extends Struct.ComponentSchema {
  collectionName: 'components_cgf_cvp_list_items';
  info: {
    displayName: 'cvp_list_item';
  };
  attributes: {
    media_item: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.Required;
    subTitle_item: Schema.Attribute.String & Schema.Attribute.Required;
    title_item: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cgf.cvp-list-item': CgfCvpListItem;
    }
  }
}
