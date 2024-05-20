import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import useClickOutside from 'src/hooks/useClickOutside';
import clsx from 'clsx';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import React, { FC, FormEvent, useState } from 'react';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import { Text } from 'components/text';

type ArticleParamsFormProps = {
	articleState: ArticleStateType;
	setArticleState: React.Dispatch<React.SetStateAction<ArticleStateType>>;
};

export const ArticleParamsForm: FC<ArticleParamsFormProps> = ({
	articleState,
	setArticleState,
}) => {
	const { ref, isOpen, setIsOpen } = useClickOutside(false);
	const [articleFormState, setArticleFormState] = useState(articleState);
	const handleButtonClick = () => setIsOpen(!isOpen);

	const handleFormElementChange = (option: OptionType, param: string) => {
		setArticleFormState({ ...articleFormState, [param]: option });
	};

	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault();
		setArticleState(articleFormState);
		setIsOpen(false);
	};

	return (
		<div ref={ref}>
			<ArrowButton isActive={isOpen} onClick={handleButtonClick} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form className={styles.form} onSubmit={handleFormSubmit}>
					<Text as='h2' weight={800} uppercase size={31}>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={articleFormState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(option) =>
							handleFormElementChange(option, 'fontFamilyOption')
						}
					/>
					<RadioGroup
						title='Размер шрифта'
						name='Размер шрифта'
						options={fontSizeOptions}
						selected={articleFormState.fontSizeOption}
						onChange={(option) =>
							handleFormElementChange(option, 'fontSizeOption')
						}
					/>
					<Select
						title='Цвет шрифта'
						selected={articleFormState.fontColor}
						options={fontColors}
						onChange={(option) => handleFormElementChange(option, 'fontColor')}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						selected={articleFormState.backgroundColor}
						options={backgroundColors}
						onChange={(option) =>
							handleFormElementChange(option, 'backgroundColor')
						}
					/>
					<Select
						title='Ширина контента'
						selected={articleFormState.contentWidth}
						options={contentWidthArr}
						onChange={(option) =>
							handleFormElementChange(option, 'contentWidth')
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
