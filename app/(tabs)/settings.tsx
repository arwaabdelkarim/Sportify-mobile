import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import { default_PMSettings, PMSettings } from "@/PMs/Settings/SettingsPM";
import { getSettingsModel } from "@/Models/Settings/SettingsModel";
import SettingsView from "@/Views/Settings/SettingsView";
import { router } from "expo-router";

export default function SettingsPage() {
	const { obj: pm, ref: pmRef } =
		useStateObject<PMSettings>(default_PMSettings);
	const model = useMemo(() => {
		const model = getSettingsModel(pmRef, router);
		model.setup();
		return model;
	}, []);

	return <SettingsView pm={pm} />;
}