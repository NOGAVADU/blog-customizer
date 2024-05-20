import {CSSProperties, useState} from "react";
import {defaultArticleState} from "src/constants/articleProps";
import clsx from "clsx";
import styles from "src/styles/index.module.scss";
import {ArticleParamsForm} from "components/article-params-form";
import {Article} from "components/article";

export const App = () => {
	const [articleState, setArticleState] = useState(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				articleState={articleState}
				setArticleState={setArticleState}
			/>
			<Article />
		</div>
	);
};