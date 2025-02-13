import type { Schema, Struct } from '@strapi/strapi';

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
      'onboarding.onboarding-name': OnboardingOnboardingName;
      'onbroading-casa-v-ne-id.cvp-list-html': OnbroadingCasaVNeIdCvpListHtml;
      'onbroading-casa-v-ne-id.cvp-list-item': OnbroadingCasaVNeIdCvpListItem;
      'themes-components.theme-configurations': ThemesComponentsThemeConfigurations;
    }
  }
}
