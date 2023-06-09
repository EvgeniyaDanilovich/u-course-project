import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'pages/ProfilePage';
import { useSelector } from 'react-redux';
import cls from './ProfilePageHeader.module.scss';
import { selectProfileReadonly } from '../../models/selectors/selectProfileReadonly/selectProfileReadonly';
import { updateProfileData } from '../../models/services/updateProfileData/updateProfileData';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(selectProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveData = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {readonly
                ? <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>{t('Edit')}</Button>
                : (
                    <div>
                        <Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_RED}>{t('Cancel')}</Button>
                        <Button onClick={onSaveData} theme={ButtonTheme.OUTLINE}>{t('Save')}</Button>
                    </div>
                )}
        </div>
    );
};
