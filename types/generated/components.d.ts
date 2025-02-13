import type { Schema, Struct } from '@strapi/strapi';

export interface OnboardingListMediaItem extends Struct.ComponentSchema {
  collectionName: 'components_onboarding_list_media_items';
  info: {
    displayName: 'list_media_item';
  };
  attributes: {
    media: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface OnboardingOnboardingName extends Struct.ComponentSchema {
  collectionName: 'components_onboarding_onboarding_names';
  info: {
    displayName: 'onboarding_name';
  };
  attributes: {
    key: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OnbroadingCasaVNeIdCardProperties
  extends Struct.ComponentSchema {
  collectionName: 'components_onbroading_casa_v_ne_id_card_properties';
  info: {
    displayName: 'Card_Properties';
  };
  attributes: {
    image_card: Schema.Attribute.String & Schema.Attribute.Required;
    url_card: Schema.Attribute.String;
  };
}

export interface OnbroadingCasaVNeIdCvpListHtml extends Struct.ComponentSchema {
  collectionName: 'components_onbroading_casa_v_ne_id_cvp_list_htmls';
  info: {
    displayName: 'cvp_list_html';
  };
  attributes: {
    cvp_feature_key: Schema.Attribute.String & Schema.Attribute.Required;
    cvp_html_url: Schema.Attribute.String;
  };
}

export interface OnbroadingCasaVNeIdCvpListItem extends Struct.ComponentSchema {
  collectionName: 'components_onbroading_casa_v_ne_id_cvp_list_items';
  info: {
    description: '';
    displayName: 'cvp_list_Item';
  };
  attributes: {
    cvp_media_item: Schema.Attribute.String;
    cvp_order: Schema.Attribute.Integer;
  };
}

export interface OnbroadingCasaVNeIdListItemDescriptions
  extends Struct.ComponentSchema {
  collectionName: 'components_onbroading_casa_v_ne_id_list_item_descriptions';
  info: {
    displayName: 'list_item_descriptions';
  };
  attributes: {
    description_item: Schema.Attribute.String;
    image_item: Schema.Attribute.String & Schema.Attribute.Required;
    title_item: Schema.Attribute.String;
  };
}

export interface SeoSeoManagements extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_managements';
  info: {
    displayName: 'seo_managements';
  };
  attributes: {
    description: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ThemesComponentsColorManagement
  extends Struct.ComponentSchema {
  collectionName: 'components_themes_components_color_managements';
  info: {
    description: '';
    displayName: 'color_management';
    icon: 'brush';
  };
  attributes: {
    hex_code: Schema.Attribute.String;
    rgb_code: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface ThemesComponentsThemeConfigurations
  extends Struct.ComponentSchema {
  collectionName: 'components_themes_components_theme_configurations';
  info: {
    displayName: 'theme_configurations';
    icon: 'brush';
  };
  attributes: {
    theme_configurations_json: Schema.Attribute.JSON;
    theme_configurations_tsx: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'onboarding.list-media-item': OnboardingListMediaItem;
      'onboarding.onboarding-name': OnboardingOnboardingName;
      'onbroading-casa-v-ne-id.card-properties': OnbroadingCasaVNeIdCardProperties;
      'onbroading-casa-v-ne-id.cvp-list-html': OnbroadingCasaVNeIdCvpListHtml;
      'onbroading-casa-v-ne-id.cvp-list-item': OnbroadingCasaVNeIdCvpListItem;
      'onbroading-casa-v-ne-id.list-item-descriptions': OnbroadingCasaVNeIdListItemDescriptions;
      'seo.seo-managements': SeoSeoManagements;
      'themes-components.color-management': ThemesComponentsColorManagement;
      'themes-components.theme-configurations': ThemesComponentsThemeConfigurations;
    }
  }
}
