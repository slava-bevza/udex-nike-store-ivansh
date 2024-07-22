import { ProductSizePageTemplate } from "~/modules/Product";
import { menFootSizeChart, sizeTips, tableNames } from "~/shared/data";

export default function MenSizeGuide() {
  return (
    <ProductSizePageTemplate
      title="Nike Men's Footwear Size Chart"
      description="Find your size in the chart below. If you do not know your size,use the How To Measure Foot Length prompts at the bottom of the size guide to help you find the right size. Please note the CM size displayed on shoe boxes and labels is different than Foot Length (cm)."
      tableChart={menFootSizeChart}
      tipsTitle={sizeTips["footwear"].title}
      tips={sizeTips["footwear"].tips}
    />
  );
}
